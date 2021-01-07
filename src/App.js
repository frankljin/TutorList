import { Route, Switch, Link } from "react-router-dom";
import { Edit } from "./Edit";
import Login from "./authenticate/Login";
import { TutorList } from "./TutorList";
import Signup from "./authenticate/Signup";
import { Home } from "./Home";
import PrivateRoute from "./authenticate/Private";
import { AuthProvider } from "./authenticate/Auth";
import { Create } from "./Create";
import { Postings } from "./Postings";
import { MyPostings } from "./MyPostings";
import { Grade10, Grade11, Grade12 } from "./views/grades";
import { Math, Science, Lang, Social } from "./views/subjects";
import { About } from "./About";
import MyCalendar from "./Calendar";
import { Meeting } from "./Meeting";

function App() {
  return (
    <div id="main">
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={TutorList} />
          <Route exact path="/about" component={About} />
          <Route exact path="/edit/:id" component={Edit} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <PrivateRoute exact path="/home" component={Home} />  {/* only available once logged in */}
          <PrivateRoute exact path="/create" component={Create} />
          <PrivateRoute exact path="/postings" component={Postings} />
          <PrivateRoute exact path="/mypostings" component={MyPostings} />
          <PrivateRoute exact path="/grade10" component={Grade10} />
          <PrivateRoute exact path="/grade11" component={Grade11} />
          <PrivateRoute exact path="/grade12" component={Grade12} />
          <PrivateRoute exact path="/math" component={Math} />
          <PrivateRoute exact path="/science" component={Science} />
          <PrivateRoute exact path="/language" component={Lang} />
          <PrivateRoute exact path="/social" component={Social} />
          <PrivateRoute exact path="/calendar" component={MyCalendar} />
          <PrivateRoute exact path="/meeting" component={Meeting} />
        </Switch>
      </AuthProvider>  
    </div>
  );
}

export default App;
