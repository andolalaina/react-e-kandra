import Job from './Job'

export default function JobList(props:any) {
    let {jobs, titles, types, methods, companies} = props;
    console.log(jobs);
    return(
        <div className="py-3">
            <div className="container">
                {jobs.map((job) => (
                    <Job id={job.id} 
                    title={titles.find((t) => t.id === job.title)!.name} 
                    experience={job.experience} 
                    type={types.find((t) => t.id === job.type)!.name} 
                    mode={methods.find((m) => m.id === job.method)!.name} 
                    uploader={companies.find((c) => c.id === job.company)!.name} 
                    deadline={job.deadline}
                    uploadDate={job.uploadDate} />
                ))}
            </div>
        </div>
    )
}