import JobList from "./JobList";

export function SortableJobList(props) {
    let {jobs, types, methods, companies} = props;
    jobs.sort((job1, job2) => {
        let date1 = new Date(job1.uploadDate);
        let date2 = new Date(job2.uploadDate);
        return date2.getTime() - date1.getTime();
      });
    return (
        <JobList jobs={jobs} types={types} methods={methods} companies={companies}/>
    )
}