import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
        border: '1px solid green'
    },

    icon:{
        marginRight: '20px'
    },

    bar:{
        backgroundColor: '#183041'
    },

    gridbio:{
        // border: '1px solid grey',
        padding: theme.spacing(2),
        justifyContent: 'center'
    },

    social:{
        display: 'flex',
        padding: '5px'
    },

    info2:{
        width: "60vw",
        border: '1px solid blue',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    summary: {
        // border: '1px solid red',
        padding: theme.spacing(1),
        width: '89vw',
        marginTop: '1rem'
    },

    image:{
        display: 'flex',
        // padding: '5px'
    },

    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
      },

      text:{
        //   border: '1px solid green',
          marginLeft: '20px',
          padding: '10px'
      },

      para:{
          color: '#183041'
      },

      tech:{
            padding: '20px 0',
            height: '100%',
            boxShadow: '0 3px 5px 2px rgba(255, 100, 135, .3)',    
      },

      skills:{
        display: 'flex',
        flexDirection: 'row',
        border: '1px solid blue'
      }


}))


export default useStyles