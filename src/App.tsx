import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FilterableJobList from './components/FilterableJobList';
import { JobDetails } from './components/JobDetails';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Hero />
            <FilterableJobList />
          </Route>
          <Route exact path="/jobs">
            <FilterableJobList showFilters />
          </Route>
          <Route exact path="/jobs/:id">
            <JobDetails />
          </Route>
          <Route path="/add">
            add
          </Route>
          <Route path="/about">
            about
          </Route>
        </Switch>
      </Router>
    </div>
    // header
      // <Content>
        // --- HOME ---
          // <Hero>
          // <Hero/>
          // <JobList>
            // <Job><Job/>
          // <JobList/>
        // --- SEARCH JOB ---
          // <Search>
            // <SearchOption><SearchOption/>
            // <JobList>
              // <Job><Job/>
            // <JobList/>
          // <Search/>
        // *** JOB DETAILS ***
          // back button <button><button/>
          // <JobDetails></JobDetails>
        // --- POST JOB OFFER ---
          // <JobForm>  
          // <JobForm/>
        // --- ABOUT ---
          // <About/>
      // <Content/>
  );
}

export default App;
