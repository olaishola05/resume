import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
      },

    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
        width: '70.5vw',
        margin: '0 auto',
        marginBottom: '1rem',
        borderBottom: '1px solid gray',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
          },
    },

    icon:{
        marginRight: '20px'
    },

    bar:{
        backgroundColor: '#183041'
    },

    bio:{
        display: 'flex',
        flexDirection: 'row',
        borderBottom: '1px solid #183041',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column-reverse',
          },
    },
    
    info:{
        width: "40vw",
        border: '1px solid blue',
        marginRight: '20px',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
          },
    },

    gridbio:{
        padding: theme.spacing(2),
        justifyContent: 'center'
    },

    social:{
        display: 'flex',
        padding: '5px',
    },

    info2:{
        width: "60vw",
        border: '1px solid blue',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        [theme.breakpoints.down('xs')]: {
            // flexDirection: 'row',
            // width: '70.1vw'
            display: 'none'
          },
    },

    summary: {
        // padding: theme.spacing(2),
        width: '100vw',
        marginTop: '.5rem'
    },

    image:{
        display: 'flex',
        padding: '5px',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            width: '100vw'
          },
    },

    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        [theme.breakpoints.down('xs')]: {
            width: theme.spacing(10),
            height: theme.spacing(10),
            align: 'center'
          },
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
            // height: '50%',
            boxShadow: '0 3px 5px 2px rgba(255, 100, 135, .3)',    
      },

      skills:{
        width: '80%',
        display: 'flex',
        // flexDirection: 'row',
        // border: '1px solid blue'
      },

      lists:{
        listStyle: 'none',
      },

      projects:{
          marginTop: '1rem',
          padding: '20px 0'
      },

      card: {
        // height: '100%',
        height: 0,
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 3px 5px 2px rgba(255, 100, 135, .3)',
    },

    cardMedia: {
        height: 0,
        paddingTop: '56.25%'
    },

    cardContent: {
        flexGrow: 1,
    },


}))


export default useStyles