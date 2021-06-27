import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({


    container:{
        backgroundColor:'white',
        borderRadius:'25px',
        minHeight:'90vh'

    },

    appBarTop:{
        margin: '25px 0',
        flexDirection : 'column',
        justifyContent:'center',
        alignItems:'center', 
        fontWeight: '800',
        marginTop: '50px',
        color:'black',
        top:'3rem',
        backgroundColor:'white',

    },

    appBar: {
        borderRadius : 15,
        margin: '30px 0',
        display : 'flex',
        flexDirection : 'column',
        justifyContent:'center',
        alignItems:'center', 
        marginTop: '25px',
        backgroundColor:'transparent',
        color:'black',
        fontSize:'24px',
        fontWeight:'700'
        

    },

    heading: {
        flexDirection : 'column',
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center', 
        fontSize:'40px',
        fontWeight: '800',
        marginTop: '50px',
        color:'black',
        top:'20',
        backgroundColor:'white',


    }
}));


