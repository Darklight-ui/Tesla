
import React from 'react'
import Buttons from './Buttons'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Item.css'

const Item = ({title, desc, backgroundImg, leftbtntxt, leftBtnLink, rightBtnText, rightBtnLink, twoButtons, first}) => {
    return (
        <div className="item" style={{
            backgroundImage: `url(${backgroundImg})`
        }}>
            <div className="item_container">
                <div className="item_text">
                    <p>{title}</p>
                    <div className="item_desc">
                        <p>{desc}</p>
                    </div>
                </div>
                
            <div className="item_lowerThird">
                <div className="item_button">
                    <Buttons imp="primary" text={leftbtntxt}  link={leftBtnLink} />
                    {twoButtons &&(<Buttons imp='secondary' text={rightBtnText} link={rightBtnLink} />)}
                </div>
                {first && (
                    <div className="item_expand">
                        <ExpandMoreIcon />
                    </div>
                )}
            </div>
        </div>
    </div>
    )
}

export default Item

                                                                                                                      