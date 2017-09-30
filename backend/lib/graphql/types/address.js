/* @flow */

import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';

const AddressType = new GraphQLObjectType({
  name: 'Address',
  description: 'An address object',
  fields: () => ({
    address: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'address (btc or eth)',
    },
    status: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'order status (unknown, pending, accepted, rejected)',
    },
  }),
});

export default AddressType;
