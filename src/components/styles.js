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
        backgroundColor: 'white'
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
        // border: '1px solid blue',
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
        // border: '1px solid blue',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        [theme.breakpoints.down('xs')]: {
            display: 'none'
          },
    },

    summary: {
        // padding: theme.spacing(2),
        width: '100vw',
        marginTop: '1rem'
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
        // width: '80%',
        display: 'grid',
        gridTemplateColumns: 'repeat(10, 1fr)'
      },

      lists:{
        listStyle: 'none',
      },

      projects:{
          marginTop: '1rem',
          padding: '20px 0',
          border: '1px solid green'
      },

      projectTitle: {
        marginBottom: '2rem',
      },

      projectCard:{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        border: '1px solid red',
        marginTop: '10px'
      },

      card: {
        width: '266.6px',
        height: '415px',
        padding: '1rem',
        boxShadow: '0 3px 5px 2px rgba(255, 100, 135, .3)',
        margin: '1rem'
    },

    cardMedia: {
        height: '100%',
    },

    cardContent: {
        flexGrow: 1,
    },

    btn: {
        textDecoration: 'none'
    },

    img:{
        width: '100%'
    }


}))


export default useStyles