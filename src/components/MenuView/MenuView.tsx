import React, { HTMLAttributes } from "react";
import styled from "@emotion/styled";

export const MenuView = ({ children, ...props }: HTMLAttributes<HTMLDivElement>) => {
    return <View {...props}>{children}</View>
};

const View = styled.div`
    display: flex;
    flex-direction: column;
   
    padding:24px;
    border-radius: 12px;
    background-color: #88888820;

    max-width: 500px;
    
    `;

export default MenuView;