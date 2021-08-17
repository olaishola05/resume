import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
    },

    icon:{
        marginRight: '20px'
    },

    bar:{
        backgroundColor: '#183041'
    },

    bio:{
        border: '1px solid red',
        display: 'flex',
        flexDirection: 'row',
        padding: theme.spacing(2)
    },

    summary: {
        border: '1px solid red',
        padding: theme.spacing(1),
        width: '89vw',
        marginTop: '1rem'
    },

    info:{
        width: "43vw",
        border: '1px solid blue',
        padding: theme.spacing(1)
    },

    info2:{
        width: "30vw",
        border: '1px solid blue',
        padding: theme.spacing(1)
    },

    image:{
        display: 'flex',
        padding: '5px'
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
      }


}))


export default useStyles