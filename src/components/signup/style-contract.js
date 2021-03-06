import styled, { createGlobalStyle } from 'styled-components';

export const BottomContainer = styled.div`
    width : 100%;
    border-top: 1px solid #f0f0f0;
    padding-left : 100px;
`;

export const ContractList = styled.div`
    padding-top : 50px;
    width : 40%;
    display: flex;
    flex-flow : column;
    align-items: center;
    justify-contents: center;
`;

export const ContractObject = styled.a`
    width : 100%;
    height : 30px;
    font-size: 14px;
    padding : 2px 0px;
    text-decorate : none;
    display : flex;
    align-items: center;
    font-weight : 500;
    color : #757575;
`;