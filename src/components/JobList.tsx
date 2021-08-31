import Job from './Job'

export default function JobList(props:any) {
    return(
        <div className="py-3">
            <div className="container">
                <Job id="1" title="Designer UI/UX" experience="" type="CDI" mode="En local" uploader="Telma SARL" deadline="01/01/2022"/>
                <Job id="2" title="Designer UI/UX" experience="02 ans" type="CDI" mode="En local" uploader="Telma SARL" uploadDate="02/08/2021"/>
            </div>
        </div>
    )
}