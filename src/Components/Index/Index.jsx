import React,{useState} from 'react';
import usuario from '../../images/usuario.svg';
import graduado from '../../images/graduado.svg';
import deberes from '../../images/deberes.svg';
import computadora from '../../images/computadora.svg';
import pa from '../../images/paralax.jpg';
import { Row, Col, Card, Button, Jumbotron, Alert, Image } from 'react-bootstrap';
import Carousel from '../Carousel/Carousel';
import Jump from 'react-reveal/Jump';
import { Parallax } from "react-parallax";
import Rotate from 'react-reveal/Rotate';
import Fade from 'react-reveal/Fade';
import CountUp from 'react-countup';
import Figure from 'react-bootstrap/Figure';
import { red } from '@material-ui/core/colors';
let usesInternStyle = {
    padding: 20,
    position: "absolute",
    top: "20%",
    left: "85%",
    transform: "translate(-85%,-50%)",
    color: "#fff",
    fontSize: "20px",
    width:"100%",
    backgroundColor:'#757575',
    opacity:'60%',
    marginBottom:80
}

export default function Index() {    
  
    return (
      <>
        <Jump>
        <Carousel/>   
        </Jump>
        <hr style={{borderBottom:'1px solid gray',marginBottom:'20px'}}/>
        <Row style={{ marginTop: 10, marginBottom: 10 }}>
        <Col sm={12} md={4}>
        <Fade left>
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={''} />
            <Card.Body>
              <Card.Title>Objetivos de la Unidad</Card.Title>
              <Card.Text>
              Brindar herramientas que desarrolle o fortalezcan las habilidades y destrezas necesarias para la empleabilidad e inserción laboral a través de desarrollos de programas y proyectos digital dirigido a jóvenes y adultos de escasos recursos.
                            </Card.Text>
              <Button to="javainfo" className="btn btn-primary"
                onClick={''}
                name="button_to_java_info">Ver mas <i class="fas fa-chevron-right"></i></Button>
            </Card.Body>
          </Card>
          </Fade>
        </Col>
        <Col sm={12} md={4}>
            <Rotate>
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={''} />
            <Card.Body>
              <Card.Title>Misión</Card.Title>
              <Card.Text>
              Somos una obra sin fines de lucro de la Compañía de Jesús, que forma parte de una federación internacional dedicada a la educación popular integral y promoción social; trabajamos a favor de niños, niñas, ...
                            </Card.Text>
              <Button to="reactinfo" className="btn btn-primary"
                onClick={''}
                name="button_to_react_info">Ver mas <i class="fas fa-chevron-right"></i></Button>
            </Card.Body>
          </Card>
          </Rotate>
        </Col>
        <Col sm={12} md={4}>
        <Fade right>
          <Card style={{ width: '100%' }} id="tarjeta">
            <Card.Img variant="top" src={''} />
            <Card.Body>
              <Card.Title>Visión</Card.Title>
              <Card.Text>
              Ser una institución reconocida a nivel nacional por su contribución a la transformación social, promoviendo la calidad educativa en alianza con el sector público y el sector privado, apoyada por un equipo de personas altamente calificadas...
                            </Card.Text>
              <Button to="androidinfo" className="btn btn-primary"
                onClick={''}
                name="button_to_android_info">Ver mas <i class="fas fa-chevron-right"></i></Button>
            </Card.Body>
          </Card>
          </Fade>
        </Col>
        
      </Row>
      <hr style={{borderBottom:'1px solid gray',marginBottom:'20px'}}/>
            <Row>
                <Col>
                    <Parallax bgImage={pa} strength={800}>
                        <div style={{ height: 150,marginBottom:10 }}>
                            <div style={usesInternStyle}>
                                <h2 style={{ color: 'white' }}>Mejora tus habilidades con los mejores cursos en línea.</h2>
                                <p>Lleva tu empresa al siguiente nivel con nuestra tecnología basada en Java, desarrollo
                                    de software a la medida, contratos como outsourcing, consultoría relacionada con Java
                                    y mucho más.
                                </p>
                            </div>
                        </div>
                        <Row style={{marginBottom:50}}>
                            <Col sm={12} md={3} className="cifras">
                                <Row>
                                    <Col style={{textAlign:'center'}}>
                                    <Jump>
                                    <Image src={usuario} width="50%" height="auto"/>
                                    </Jump>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{textAlign:'center'}}>
                                    <CountUp style={{fontSize:30}} start={0} end={6500} duration={2.75} separator="," />
                                    <p>Estudiantes aprendiendo</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm={12} md={3} className="cifras">
                                <Row>
                                    <Col style={{textAlign:'center'}}>  
                                    <Jump>
                                    <Image src={graduado} width="50%" height="auto"/>
                                    </Jump>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{textAlign:'center'}}>
                                    <CountUp style={{fontSize:30}} start={0} end={58263} duration={2.75} separator="," />
                                    <p>Graduados</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm={12} md={3} className="cifras">
                                <Row>
                                    <Col style={{textAlign:'center'}}>
                                    <Jump>
                                    <Image src={deberes} width="50%" height="auto"/>
                                    </Jump>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{textAlign:'center'}}>
                                    <CountUp style={{fontSize:30}} start={0} end={896673} duration={2.75} separator="," />
                                    <p>Cursos gratuitos</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm={12} md={3} className="cifras">
                                <Row>
                                    <Col style={{textAlign:'center'}}>
                                    <Jump>
                                    <Image src={computadora} width="50%" height="auto"/>
                                    </Jump>                                    
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{textAlign:'center'}}>
                                    <CountUp style={{fontSize:30}} start={0} end={9000} duration={2.75} separator="," />
                                    <p>Cursos activos</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Parallax>
                </Col>
            </Row>
            <hr style={{borderBottom:'1px solid gray',marginBottom:'20px'}}/>
      </>
    );
  }


