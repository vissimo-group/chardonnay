import styled from 'styled-components';
import { Colors, mediaQueries } from '../../tokens';
import { Pin } from 'semillon';
import { Tag } from '../index';
import React,{ReactNode} from 'react';

interface TopBarProps {
    cepText?: string;
    tagValue?: string;
    iconTag?: ReactNode;
    infoText1?: string;
    infoText2?: string;
    infoText3?: string;
}

const ContainerTopBar = styled.header`
  height: 40px;
  background-color: ${Colors.light.brand.brand100};
  color: ${Colors.light.background.background100};
  display: flex;
  padding: 8px 32px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  white-space: nowrap;

  @media screen and (max-width: ${mediaQueries.screenMd}) {
    height: 10px;
    overflow: hidden;
    padding: 0;

    > * {
      visibility: hidden;
    }
  }
`;

const ContainerInfo = styled.div`
  display: flex;
  gap: 30px;

  p {
    font-weight: 600;
    line-height: 18px;
    letter-spacing: -0.0025em;
    text-align: left;
  }
`;

const ContainerCep = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

const TopBar: React.FC<TopBarProps> = ({
         cepText,
         tagValue,
         iconTag,
         infoText1,
         infoText2,
         infoText3
    }) => {

    const Cep: React.FC = () => {
        if(!cepText) {
            return <div/>
        }

        return (
            <ContainerCep>
                <Pin size={26} />
                <p>{cepText}</p>
            </ContainerCep>
        )
    }

    const TagValue: React.FC = () => {
         if(!tagValue){
             return <div/>
         }
         return (
             <Tag
                 severity="error"
                 icon={iconTag}
                 value={tagValue}
             />
         )
    }

    const Info: React.FC = () => {
        if(!(infoText1 || infoText2 || infoText3)) {
            return <div/>
        }
        return (
            <ContainerInfo>
                <p>{infoText1}</p>
                <p>{infoText2}</p>
                <p>{infoText3}</p>
            </ContainerInfo>
        )
    }

    return (
        <ContainerTopBar>
            <Cep/>
            <TagValue/>
            <Info/>
        </ContainerTopBar>
    );
};

TopBar.displayName = 'TopBar';

export default TopBar;
