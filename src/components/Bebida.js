import React from 'react'
import useBebidas from '../hooks/useBebidas'
import { Col, Card, Button } from 'react-bootstrap'

const Bebida = ({bebida}) => {
    const { handleModalClick, handleBebidaIdClick } = useBebidas()
    const { idDrink, strDrink, strDrinkThumb } = bebida

    return(
        <Col md={6} lg={3}>
            <Card className='mb-4'>
                <Card.Img 
                    variant='top'
                    src={strDrinkThumb}
                    alt={`Imagen de ${strDrink}`}
                />
                <Card.Body>
                    <Card.Title>{strDrink}</Card.Title>
                    <Button
                        variant={'warning'}
                        className='w-100 text-uppercase mt2'
                        onClick={() => {
                            handleModalClick()
                            handleBebidaIdClick(idDrink)
                            } 
                        }
                    >
                        Ver Receta
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Bebida