import styled from 'styled-components';

export const AddButtonWrapper = styled.div`
color: ${props => props.theme.colors.main};
background-color: ${props => props.theme.colors.second};
width: 20px;
height: 20px;
margin: auto 0;
border-radius: 50%;
position: absolute;
left: 0;
pointer-events: none;
&:before,
&:after {
    content: "";
    position: absolute;
    height: 6px;
    width: 6px;
}     
&:before {
    border-bottom-width: 3px;
    border-bottom-style: solid;
    border-left-width: 3px;
    border-left-style: solid;
    left: 8.5px;
    top: 2.5px;
}    
&:after {
    border-top-width: 3px;
    border-top-style: solid;
    border-right-width: 3px;
    border-right-style: solid;
    left: 2.5px;
    top: 8.5px;
}    
`;
