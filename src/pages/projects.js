import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Box, FlexList, Subhead, Button, Section} from "../components/ui"

export default function ProjectPage (props){
    const data = props.data.allContentfulProject.edges
    console.log(data)
    return(
        <Layout title="Projects">
          <Section >
          <Container style={{marginTop:"2rem"}}>
          <FlexList gutter={3} variant="start" responsive wrap>
            {data.map((item) =>{
                const {node} = item
                return  <Box key={node.contentful_id} as="li" width="third"  padding={4} paddingY={3}>
                    <Subhead center>
            {node.title}
            </Subhead>
                    <GatsbyImage
                        alt={node.featuredImage.alt}
                        image={getImage(node.featuredImage.gatsbyImageData)}
                    />
                    <Button href={node.link} style={{display:"block", margin:"1rem auto",  textAlign:"center"}}>Learn More</Button>
              </Box>
            })}
            </FlexList>
            </Container>
          </Section>
        </Layout>
    ) 
    
}

export const query = graphql`
  query MyQuery {
  allContentfulProject {
    edges {
      node {
        contentful_id
        title
        description
        featuredImage {
          gatsbyImageData
        }
        
        link
      }
    }
  }
}


`