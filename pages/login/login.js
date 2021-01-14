import Page from "../../components/common/page";
import Login from '../../components/pages/login';

const LoginPage = (props) => {
    return (
        <Page>
            <Login {...props} />
        </Page>
    )
}

LoginPage.getInitialProps = ({ query }) => {
    return query
};


export default LoginPage