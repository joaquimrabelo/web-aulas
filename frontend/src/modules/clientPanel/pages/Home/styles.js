import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
    overflow: hidden;
    
    img {
        margin-top: 2rem;
    }

    .bg-block {
        position: relative;
    }
    .bg {
        background-color: #83c6db;
        width: 180vh;
        position: absolute;
        top: -129px;
        height: 1160px;
        -webkit-transform: rotate(115deg);
        -ms-transform: rotate(115deg);
        transform: rotate(125deg);
        
    }
    

    @media(min-width: 600px) {
        .main-title {
            text-align: left;
            h1 {
                font-size: 2rem;
            }
        }
           
        img {
            margin-top: 0;
        }

        .bg {
            width: 200vh;
            position: absolute;
            top: -500px;
            height: 1639px;
            transform: rotate(115deg);
        }
        
    }
`;