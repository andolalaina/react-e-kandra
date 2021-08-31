import { Button, InputGroup, FormControl, Form, Row, Col, Container } from "react-bootstrap";
import JobList from './JobList';

export default function SortableFilterableJobList() {
    let jobs = [1];
    return(
        <div>
            <Container fluid className="py-5 bg-white">
            <Row>
                <Col>
                    <Form>
                        <Row className="my-2">
                            <Col xs={12} md={5}>
                                <InputGroup>
                                    <FormControl placeholder="Ex : Développeur, Designer,..."/>
                                    <Button variant="primary">Rechercher</Button>
                                </InputGroup>
                            </Col>
                            <Col xs={12} md={7} className="mt-3 mt-md-0">
                                <Row>
                                    <Col>
                                            <Button variant="outline-danger">Effacer les filtres</Button>
                                    </Col>
                                    <Col>
                                        <InputGroup>
                                            <Form.Select>
                                                <option>Expériences</option>
                                                <option value="0">Aucun</option>
                                                <option value="1">01 année d'expériences</option>
                                                <option value="2">02 années d'expériences</option>
                                                <option value="3">03 années d'expériences</option>
                                                <option value="4">04 années d'expériences</option>
                                                <option value="5">05 années d'expériences ou plus</option>
                                            </Form.Select>
                                        </InputGroup>
                                    </Col>
                                    <Col>
                                        <InputGroup>
                                            <Form.Select>
                                                <option>Type de contrat</option>
                                                <option value="1">CDI</option>
                                                <option value="2">CDD</option>
                                                <option value="3">Stage</option>
                                                <option value="4">Intérim</option>
                                                <option value="5">Freelance</option>
                                                <option value="6">Consultance</option>
                                            </Form.Select>
                                        </InputGroup>
                                    </Col>
                                    <Col>
                                        <InputGroup>
                                            <Form.Select>
                                                <option>Mode de travail</option>
                                                <option value="1">En Local</option>
                                                <option value="2">En télétravail</option>
                                                <option value="3">Mixte</option>
                                                <option value="4">A discuter</option>
                                            </Form.Select>
                                        </InputGroup>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
            </Container>
            {jobs.length?(
                <JobList />
            ):(
                <Container className="my-5 d-flex justify-content-around">
                    <h3>- Aucun Résultat -</h3>
                </Container>
            )}
        </div>
    )
}