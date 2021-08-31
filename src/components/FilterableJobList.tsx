import { Button, InputGroup, FormControl, Form, Row, Col, Container } from "react-bootstrap";
import { jobs, title as titles , type as types , method as methods , company as companies   } from "../data/data";
import { SortableJobList } from "./SortableJobList";

export default function FilterableJobList(props) {
    let {showFilters} = props;
    return(
        <div>
            {showFilters && (
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
                                                {types.map((t) => (
                                                    <option value={t.id}>{t.name}</option>
                                                ))}
                                            </Form.Select>
                                        </InputGroup>
                                    </Col>
                                    <Col>
                                        <InputGroup>
                                            <Form.Select>
                                                <option>Mode de travail</option>
                                                {methods.map((m) => (
                                                    <option value={m.id}>{m.name}</option>
                                                ))}
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
            )}
            {jobs.length?(
                <SortableJobList jobs={jobs} titles={titles} types={types} methods={methods} companies={companies}/>
            ):(
                <Container className="my-5 d-flex justify-content-around">
                    <h3>- Aucun Résultat -</h3>
                </Container>
            )}
        </div>
    )
}