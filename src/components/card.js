import React from "react"
import "./card.css"
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import { Subhead } from "./ui"

const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        const { uri } = node.data
        return (
          <a href={uri} className="underline">
            {children}
          </a>
        )
      },
      [BLOCKS.HEADING_2]: (node, children) => {
        return <h2>{children}</h2>
      },
    },
  }

export const Card  = ({item}) =>{

    const getPrice = (val1 ,val2) =>{
        val1 = parseInt(val1)
        val2 = parseInt(val2)
        return val1 + val2
    }
    
    return <div className="card">
        <Subhead center style={{fontSize:"25px"}}>{item.title}</Subhead>
        <p>{item.description}</p>
        <h3>{item.subtitle}</h3>
        <div className="list">
            {renderRichText(item.list, options)}
        </div>
        <div className="price-list">
            <div className="price-list-left">
                <span className="price-text">${item.price}</span>
                <p className="price-name">{item.title} Package</p>
            </div>
            <div className="price-list-right">
                <span>For Example:</span>
                <div className="example-price-item">
                    <p className="example-price">3 Page Website ${getPrice(item.price , 3 * item.extra)}</p>
                    <span className="price-alt">${item.extra} per additional web page</span>
                </div>
                <div className="example-price-item">
                    <p className="example-price">5 Page Website ${getPrice(item.price , 5 * item.extra)}</p>
                    <span className="price-alt">${item.extra} per additional web page</span>
                </div>
                <div className="example-price-item">
                    <p className="example-price">10 Page Website ${getPrice(item.price , 10 * item.extra)}</p>
                    <span className="price-alt">${item.extra} per additional web page</span>
                </div>              
            </div>
        </div>

        
    </div>
}