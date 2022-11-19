import styled from "styled-components"

export const ScrollbarWrapper = styled.div(() => ({
    width: "100%",
    height: "100%",
    overflowY: "scroll",
    scrollbarColor: "white blue",
    padding: 20,
    margin: 2,
    "::-webkit-scrollbar": {
        width: "1rem",
    },
    "::-webkit-scrollbar-track": {
        
background: 'linear-gradient(90deg, rgba(243,190,118,0.23573179271708689) 0%, rgba(217,152,166,0.24413515406162467) 47%, rgba(185,104,226,0.17690826330532217) 74%)',
       
        borderRadius: "15rem",
    },
    "::-webkit-scrollbar-thumb": {
        background: '#e18fdf',
        backgroundImage: `url("https://talentum.space/wp-content/uploads/2022/08/rocketOutlined.png")` ,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '20px',
        borderRadius: '10px',
    },
    "::-webkit-scrollbar-thumb:hover": {
        maxHeight: "10px"
    },

}))

export default ScrollbarWrapper