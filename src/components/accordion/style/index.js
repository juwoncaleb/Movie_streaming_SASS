/* eslint-disable no-shawdow*/
import React, {useState , useContext , createContext} from 'react'
import { Container } from 'react-bootstrap'

const ToggleContex = createContext();

export default function Accordion ({ children , ...restProps}){
    return (
        <Container>
            <Inner {...restProps}>
                {children}
            </Inner>
        </Container>
    );
}

Accordion.Title = function AccordionTitle(children, ...restProps) {
    return <Title {...restProps}>{children}</Title>;
};
Accordion.Frame = function AccordionFrame(children, ...restProps) {
    return <Frame {...restProps}>{children}</Frame>;
};
Accordion.Item = function AccordionItem(children, ...restProps) {
    const [toggleShow, setToggleShow] = useState(false)
    return <Item {...restProps}>{children}</Item>;
};
// setToggle function is used to control the toggling of the accodion 
Accordion.Header = function AccordionHeader(children, ...restProps) {
    return <Header onClick={()=> setToggle((toggleShow)=> !toggleShow)} 
    {...restProps}>{children}
    </Header>;
};
