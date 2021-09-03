import Job from './Job'

function dateToString(date: Date) {
    let day = date.getDate().toString();
    let month = (date.getMonth()+1).toString();
    let year = date.getFullYear().toString();
    day = day.length < 2 ? "0" + day.toString() : day;
    month = month.length < 2 ? "0" + month.toString() : month;
    return day + "/" + month + "/" + year;
}

export default function JobList(props:any) {
    let {jobs, types, methods, companies} = props;
    console.log(jobs);
    return(
        <div className="py-3">
            <div className="container">
                {jobs.map((job) => (
                    <Job id={job.id} 
                    title={job.title} 
                    experience={job.experience} 
                    type={types.find((t) => t.id === job.type)!.name} 
                    mode={methods.find((m) => m.id === job.method)!.name} 
                    uploader={companies.find((c) => c.id === job.company)!.name} 
                    deadline={dateToString(new Date(job.deadline))}
                    uploadDate={dateToString(new Date(job.uploadDate))} />
                ))}
            </div>
        </div>
    )
}