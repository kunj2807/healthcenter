import { Avatar, Button, Grid, Paper, TextField } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import style from '../../styles/contact.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'


function Contact() {
  const validation = Yup.object().shape({
    Email: Yup.string()
      .email("Invalid Email"),
  })

  const data = {
    First_Name: '',
    Last_Name: '',
    Email: '',
    Number: '',
    Message: '',
    subject: 'Contact'
  }
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: data,
    onSubmit: async (values, { resetForm }) => {
      const res = await fetch('http://localhost:3000/api/sendgrid', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({values})
      });
      resetForm();
    },
    validationSchema: validation
  })
  const { First_Name, Last_Name, Email, Number, Message } = formik.values
  const { handleChange, handleSubmit } = formik
  return (
    <div className={style.body}>
      <Grid container >

        <Grid item align='center' xs={12} style={{ background: "#d32f2f" }}>
          <h1>Heath <strong>Center</strong></h1>
          <p className={style.back}>Fill out the form and we will be in touch as soon as possible</p>
        </Grid>

        <Grid item xs={11} sm={8} md={5} lg={5} style={{ margin: '30px auto' }} >

          <Paper elevation={10}>
            <form onSubmit={handleSubmit} style={{ padding: '20px' }}>

              <Grid container spacing={1}>

                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <TextField label='First Name' name='First_Name' value={First_Name} color='error' onChange={handleChange} required fullWidth style={{ marginTop: 10 }}
                  inputProps={{
                    "aria-label": "first name",
                }}  />
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <TextField label='Last Name' name='Last_Name' value={Last_Name} color='error' onChange={handleChange} required fullWidth style={{ marginTop: 10 }}
                  inputProps={{
                    "aria-label": "last name",
                }}  />
                </Grid>

              </Grid>

              <TextField label='Email' type='Email' name='Email' value={Email} color='error' onChange={handleChange} fullWidth required style={{ marginTop: 10 }}
              inputProps={{
                "aria-label": "Email",
            }}  />

              <TextField label='Contact Number' name='Number' type='Number' value={Number} color='error' onChange={handleChange} fullWidth required style={{ marginTop: 10 }} 
              inputProps={{
                "aria-label": "contact Number",
            }} />

              <TextField label='Message' name='Message' multiline rows={3} color='error' value={Message} onChange={handleChange} fullWidth style={{ marginTop: 10 }}
              inputProps={{
                "aria-label": "Message",
            }}  />

              <Button variant='outlined' type='submit' color='error' style={{ width: 100, height: 40, marginTop: 10 
              }}
              >Sumbit</Button>

            </form>
          </Paper>

        </Grid>
        <Grid item container xs={12} sm={12} md={5} lg={5} align='center' style={{ marginTop: 30 }}>

          <div className={style.contactBox}>

            <div className={style.icon}>
                <a href='https://goo.gl/maps/a5KsbNw6Lm8Vyf267'>
              <Avatar style={{ background: "#d32f2f" }}><LocationOnIcon /></Avatar>
                </a>
            </div>

            <div className={style.para}>
              <span ><b><a className={style.Email} href='https://goo.gl/maps/a5KsbNw6Lm8Vyf267'>Address</a></b></span>
              <p className={style.details}><a className={style.Email} href='https://goo.gl/maps/a5KsbNw6Lm8Vyf267'>307, Silver Squre, Near Dipak School, Gangotri Circle Road, Nikol, Ahmedabad</a></p>
            </div>

          </div>

          <div className={style.contactBox}>

            <div className={style.icon}>
            <a className={style.Email} href='tel:9601871672'>
              <Avatar style={{ background: "#d32f2f" }}><LocalPhoneIcon /></Avatar>
            </a>
                
            </div>

            <div className={style.para}>
              <span><b>Phone</b></span>
              <p className={style.details}><a className={style.Email} href='tel:9601871672'>+91 9601871672</a></p>
            </div>

          </div>
          <div className={style.contactBox}>

            <div className={style.icon}>
            <a className={style.Email} href='mailto:rekhagadhesariya@gmail.com'>
              <Avatar style={{ background: "#d32f2f" }}><MailIcon /></Avatar>
            </a>
            </div>

            <div className={style.para}>
              <span><b>Email</b></span>
              <p className={style.details}><a className={style.Email} href='mailto:rekhagadhesariya@gmail.com'>rekhagadhesariya01@gmal.com</a></p>
            </div>

          </div>

        </Grid>
        
      </Grid>
    </div>
  )
}

export default Contact