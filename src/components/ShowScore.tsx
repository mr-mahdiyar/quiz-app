import { Box, Typography } from '@mui/material'
const boxStyle = {
  width: "80%",
  height: "60%",
  // border: "1px solid black",
  position: "absolute",
  top: "50%",
  left: "50%",
  sx: {
    transform: "translate(-50%, -50%)",
  },
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 10,
  bgcolor: "customWhite.main"
}

type ShowScorePropsType = {
    score: number
}
const ShowScore = ({score} : ShowScorePropsType) => {
  return (
    <>
    {score > 0 ? (<Box {...boxStyle}>
      <Typography variant='h4'>
        شما به {score} سوال جواب درست دادید.
        <br />
        امتیاز شما {score * 20} از 100 می باشد!
      </Typography>
    </Box>) : (<Box {...boxStyle}>
      <Typography variant='h4' color={"customRed.main"}>
        شما همه سوالات را اشتباه جواب دادید! بنابراین امتیازی کسب نکردید!
      </Typography>
    </Box>)}
    
    </>
    
  )
}

export default ShowScore
