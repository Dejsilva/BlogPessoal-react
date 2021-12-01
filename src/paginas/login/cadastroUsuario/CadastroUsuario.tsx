import React from 'react';
import './CadastroUsuario.css';
import { Grid, Typography, Box, Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';

function CadastroUsuario() {
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='imagem2'></Grid>
            <Grid item xs={6} alignItems='center'>
                <form >
                    <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastrar</Typography>
                    <TextField id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />
                    <TextField id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                    <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                    <TextField id='confirmaSenha' label='confirmaSenha' variant='outlined' name='confirmaSenha' margin='normal' type='password' fullWidth />
                    <Box marginTop={2} textAlign='center'>
                        <Link to='/login' className='texte-decorator-none'>
                            <Button variant='contained' color='secondary' className='btnCancelar'>
                                Cancelar
                            </Button>
                        </Link>
                        <Button type='submit' variant='contained' color='primary'>
                            Cadastrar
                        </Button>
                    </Box>
                </form>
            </Grid>



        </Grid>

    );
}

export default CadastroUsuario;