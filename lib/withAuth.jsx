import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';

// Usuario global
const globalUser = null;

export default function withAuth(
  BaseComponent,
  { loginRequired = true, logoutRequired = false } = {},
) {
  // Definimos los parametros que va a tener este componente
  const PropTypes = {
    user: PropTypes.shape({
      id: PropTypes.string,
      isAdmin: PropTypes.bool,
    }),
    isFromServer: PropTypes.bool.isRequired,
  };

  // Propiedad para poder "rescribir el usuario" como nulo
  const defaultProps = {
    user: null,
  };

  class App extends React.Component {
    static async getInitialProps(ctx) {
      // getInitialProps

      const isFromServer = typeof window === 'undefined';
      const user = ctx.req ? ctx.req.user : globalUser;

      if (isFromServer && user) {
        user._id = user._id.toString();
      }

      const props = { user, isFromServer };

      if (BaseComponent.getInitialProps) {
        Object.assign(props, await BaseComponent.getInitialProps(ctx)) || {};
      }

      return props;
    }

    componentDidMount() {
      // 2. componentDidMount
    }

    render() {
      return <BaseComponent {...this.props} />;
    }
  }

  App.propTypes = propTypes;
}
