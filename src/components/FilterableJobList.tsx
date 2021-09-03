import { useEffect, useState } from "react";
import { Button, InputGroup, FormControl, Form, Row, Col, Container } from "react-bootstrap";
import { type as types , method as methods , company as companies   } from "../data/data";
import { SortableJobList } from "./SortableJobList";



export default function FilterableJobList(props) {
    let [jobs, setJobs] = useState([]);
    let [query, setQuery] = useState("");
    let [xpFilter, setXpFilter] = useState(0);
    let [typeFilter, setTypeFilter] = useState(0);
    let [modeFilter, setModeFilter] = useState(0);
    let [requestNumber, setReqNumber] = useState(0);

    useEffect(() => {
        fetch("http://localhost:8000/jobs?q="+query+"&xp="+xpFilter+"&type="+typeFilter+"&mode="+modeFilter)
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result);
                setJobs(result);
            },
            (error) => {console.log(error)}
        )
    }, [requestNumber, xpFilter, typeFilter, modeFilter])

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
                                    <FormControl placeholder="Ex : Développeur, Designer,..." onChange={(e) => setQuery(e.target.value)} value={query}/>
                                    <Button variant="primary" onClick={() => setReqNumber(requestNumber + 1)}>Rechercher</Button>
                                </InputGroup>
                            </Col>
                            <Col xs={12} md={7} className="mt-3 mt-md-0">
                                <Row>
                                    <Col>
                                            <Button variant="outline-danger">Effacer les filtres</Button>
                                    </Col>
                                    <Col>
                                        <InputGroup>
                                            <select className="form-select" value={xpFilter} onChange={(e) => setXpFilter(parseInt(e.target.value))}>
                                                <option>Expériences</option>
                                                <option value="0">Aucun</option>
                                                <option value="1">01 année d'expériences</option>
                                                <option value="2">02 années d'expériences</option>
                                                <option value="3">03 années d'expériences</option>
                                                <option value="4">04 années d'expériences</option>
                                                <option value="5">05 années d'expériences ou plus</option>
                                            </select>
                                        </InputGroup>
                                    </Col>
                                    <Col>
                                        <InputGroup>
                                            <select className="form-select" value={typeFilter} onChange={(e) => setTypeFilter(parseInt(e.target.value))}>
                                                <option>Type de contrat</option>
                                                {types.map((t) => (
                                                    <option value={t.id}>{t.name}</option>
                                                ))}
                                            </select>
                                        </InputGroup>
                                    </Col>
                                    <Col>
                                        <InputGroup>
                                            <select className="form-select" value={modeFilter} onChange={(e) => setModeFilter(parseInt(e.target.value))}>
                                                <option>Mode de travail</option>
                                                {methods.map((m) => (
                                                    <option value={m.id}>{m.name}</option>
                                                ))}
                                            </select>
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
                <SortableJobList jobs={jobs} types={types} methods={methods} companies={companies}/>
            ):(
                <Container className="my-5 d-flex justify-content-around">
                    <h3>- Aucun Résultat -</h3>
                </Container>
            )}
        </div>
    )
}