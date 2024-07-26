import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      heading: {
        fontFamily: 'Helvetica',
        fontSize: '2rem',
        fontWeight: 'bold',
        background: 'linear-gradient(45deg, #000000 20%, #2B50AC 90%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },
      image: {
        marginLeft: '15px',
      },
      [theme.breakpoints.down('sm')]: {
        mainContainer: {
          flexDirection: "column-reverse",
        }
      }, 
}));