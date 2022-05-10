import * as React from "react"

import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Container, Section, Button, Box,Text, Flex, Base, Heading} from "../components/ui"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { backgrounds } from "../components/ui.css"

const TeaxtArea = styled.textarea`
width: 100%;
height: 350px;
padding: 12px 20px;
box-sizing: border-box;
border: 2px solid #ccc;
border-radius: 4px;
background-color: #f8f8f8;
font-size: 16px;
resize: vertical;
font-family:"DM Sans"
`
const Input = styled.input`
width: 100%;
padding: 12px 20px;
box-sizing: border-box;
border: 2px solid #ccc;
border-radius: 4px;
background-color: #f8f8f8;
font-size: 16px;
flex:1;
`


export default function ContactPage(props){


    const [isSubmitted, setSubmitted] = React.useState(false)

    const [formState, setFormState] = React.useState({
        firstname:"",
        lastname:"",
        title:"",
        email:"",
        description:""
    })
    const data = props.data.allContentfulContactPage.edges

    const {node} = data[0]


    const handleSubmit = (e) =>{
        e.preventDefault()
        setFormState({
            firstname:"",
        lastname:"",
        title:"",
        email:"",
        description:""
        })

        setSubmitted(true)
    }

    return <Layout>
        <Section>
            <Container >
                <Flex gap={5} variant="responsive" style={{alignItems:"flex-start"}}>
                    <Box width="half" >
                        <Heading>{node.title}</Heading>
                        <Text as="p" variant="lead">
                            {node.description}
                        </Text>
                        <GatsbyImage
                            alt={node.image.alt}
                            image={getImage(node.image.gatsbyImageData)}
                        />
                    </Box>
                    <Box width="half">
                        <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
                            <div style={{display:"flex"}}>
                                <Base className="input-area" style={{ padding:".5rem", flex:"1"}}>
                                    <h5 style={{margin:"0 0 5px 0"}}>First Name</h5>
                                    <Input name="firstname" required value={formState.firstname} onChange={(e) => setFormState({...formState,[e.target.name]:e.target.value})}/>
                                </Base>
                                <Base className="input-area" style={{ padding:".5rem", flex:"1"}}>
                                    <h5 style={{margin:"0 0 5px 0"}}>Last Name</h5>
                                    <Input name="lastname" required  value={formState.lastname} onChange={(e) => setFormState({...formState, [e.target.name]:e.target.value})}/>
                                </Base>
                            </div>
                            <Base className="input-area" style={{ padding:".5rem"}} >
                                <h5 style={{margin:"0 0 5px 0"}}>Title</h5>
                                <Input  name="title" required  value={formState.title} onChange={(e) => setFormState({...formState, [e.target.name]:e.target.value})}/>
                            </Base> 
                            <Base className="input-area" style={{ padding:".5rem"}} >
                                <h5 style={{margin:"0 0 5px 0"}}>Email</h5>
                                <Input  name="email" type="email" value={formState.email} onChange={(e) => setFormState({...formState, [e.target.name]:e.target.value})}/>
                            </Base>
                            <Base className="input-area" style={{padding:".5rem"}}>
                                <h5 style={{margin:"0 0 5px 0"}}>Description</h5>
                                <TeaxtArea name="description" req value={formState.description} onChange={(e) => setFormState({...formState, [e.target.name]:e.target.value})}/>
                            </Base>
                            <Base style={{padding:".5rem"}}>
                                <Button onClick={handleSubmit}>Send</Button>
                            </Base>  
                        </form>
                        {isSubmitted && <Base  style={{background:"green", padding:"1rem", color:"white", borderRadius:"10px", marginTop:"1rem"}}>
                            Your form submitted successfully
                        </Base>}
                    </Box>
                </Flex>
            </Container>
        </Section>
    </Layout>
}

export const query = graphql`
  query getContactInformation {
    allContentfulContactPage {
    edges {
      node {
        title
        description
        image {
          gatsbyImageData
          alt
        }
      }
    }
  }
}
`