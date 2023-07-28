import React from 'react';
import TagComponent from './TagComponent';
import styled from 'styled-components';

const TagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 3rem;
`;

export default function Tag(){
    const tagsData = [
        { id: 1, text: '취업', imageUrl: "/Images/tagImage/tomato.png", alt: "토마토" },
        { id: 2, text: '실업 / 퇴직', imageUrl: "/Images/tagImage/eggplant.png", alt: "가지" },
        { id: 3, text: '보험', imageUrl: "/Images/tagImage/potato.png", alt: "감자" },
        { id: 4, text: '임금', imageUrl: "/Images/tagImage/corn.png", alt: "옥수수" },
        { id: 5, text: '복리후생', imageUrl: "/Images/tagImage/radish.png", alt: "무" },
        { id: 6, text: '직장 내 괴롭힘', imageUrl: "/Images/tagImage/cabbage.png", alt: "양배추" },
        { id: 7, text: '취약계층', imageUrl: "/Images/tagImage/onion.png", alt: "양파" }
    ];

    return (
        <TagsContainer>
            {tagsData.map((tag) => 
                <TagComponent 
                    key={tag.id} 
                    text={tag.text} 
                    imageUrl={tag.imageUrl} 
                    alt={tag.alt}
                />
            )}
        </TagsContainer>
    )
}