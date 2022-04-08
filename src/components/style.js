

export default function styles(theme) {
    return {
        carousel:{
            margin:"0rem 5rem"
        },
        title:{
            fontFamily:"Poppins !important",
            fontWeight:"700 !important",
        },
        banner:{
            objectFit:"contain !important",
            borderRadius:"10px !important",
            backgroundColor:"#C4C4C4",       
            backgroundRepeat: 'no-repeat',    
            backgroundSize:" cover",
            backgroundPosition: "center",
            height:"40vh",
            width:"100%",
            overflow:"hidden",
            maxHeight:"400px",
            minHeight:"300px",
        },
        partnerImage:{
            height:"11vw",
            width:"11vw",
            background:"#FF6B6B",

            margin:"-8rem auto 0% auto",
            borderRadius:"50%",
            border:"8px solid white",
            maxWidth:"220px",
            maxHeight:"220px",
            minHeight:"100px",
            minWidth:"100px",
        },
        socials:{
            width:"30px",
            margin:"0rem 1rem"
        }
    };
  }