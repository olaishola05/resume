import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: { 
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.background.paper,
      },

    container: {
        padding: theme.spacing(8, 0, 6),
        width: '70.5vw',
        margin: '0 auto',
        marginTop: '1rem',
        marginBottom: '1rem',
        borderBottom: '1px solid gray',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            marginTop: 0,
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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        [theme.breakpoints.down('xs')]: {
            display: 'flex',
            flexDirection: 'column-reverse'
          },
    },

    summary: {
        width: '100vw',
        marginTop: '1rem',
        [theme.breakpoints.down('xs')]: {
            width: '100vw'
          },
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
            display:'none'
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
      },

      skills:{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '2px',
        borderBottom: '1px solid gray',
        width: '80%',
        margin: '0 auto',
        [theme.breakpoints.down('xs')]: {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',  
          },
        
      },

      gridItems:{
        marginTop: '1rem',
      },

      btns:{
        width: '150px',
        marginBottom: '.5rem'
      },

      lists:{
        listStyle: 'none',
      },

      projects:{
          padding: '20px 0',
      },

      projectTitle: {
        marginBottom: '2rem',
      },

      projectCard:{
        width: '70.5vw',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        marginTop: '10px',
        marginBottom: '2rem',
        [theme.breakpoints.down('xs')]: {
            gridTemplateColumns: '1fr',
          },
      },

      card: {
        width: '276.6px',
        height: '415px',
        padding: '1rem',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        margin: '1rem',
        [theme.breakpoints.down('xs')]: {
            display: 'grid',
            gridTemplateColumns: '1fr',
            width: '276.6px',
          },
        
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
    },

    foot:{
        borderBottom: '1px solid gray'
    },

    socio:{
        margin: '10px'
    }


}))


export default useStyles