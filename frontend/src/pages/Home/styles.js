import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
    overflow: hidden;

    .bg-block {
        position: relative;
    }
    .bg {
        background-color: #83c6db;
        width: 200vh;
        position: absolute;
        top: -500px;
        height: 1639px;
        transform: rotate(115deg);
    }

    @media(min-width: 600px) {
      
        text-align: left;
        
    }
`;