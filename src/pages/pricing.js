import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container,Heading,ProjectHead, Box, FlexList, Subhead, Button, Section, Flex} from "../components/ui"
import {Card} from "../components/card"

export default function PricingPage (props){
    const data = props.data.allContentfulPricing.edges
    return(
        <Layout title="Pricing">
          <Section>
            <Container>
                <Heading center>Pricing</Heading>
                <FlexList variant="center" responsive wrap style={{alignItems:"flex-start", marginTop:"2rem"}}>
                    {data.map((item,idx) =>{
                        return <Card key={idx} item={item.node}>

                        </Card>
                    })}
                </FlexList>
                
            </Container>
          </Section>
        </Layout>
    ) 
    
}

export const query = graphql`
query pricingQuery {
  allContentfulPricing(sort: {fields: createdAt, order: ASC}) {
    edges {
      node {
        title
        subtitle
        price
        description
        extra
        list {
          raw
        }
      }
    }
  }
}
`