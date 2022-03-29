const Permissions = {
  USERS: {
    LIST: {
      VALUE: 'users-list',
      TEXT: 'List users',
    },
    CREATE: {
      VALUE: 'users-create',
      TEXT: 'Create user',
    },
    UPDATE: {
      VALUE: 'users-update',
      TEXT: 'Update user',
    },
    DELETE: {
      VALUE: 'users-delete',
      TEXT: 'Delete user',
    },
  },
  PROFILES: {
    LIST: {
      VALUE: 'profiles-list',
      TEXT: 'List profiles',
    },
    CREATE: {
      VALUE: 'profiles-create',
      TEXT: 'Create profile',
    },
    UPDATE: {
      VALUE: 'profiles-update',
      TEXT: 'Update profile',
    },
    DELETE: {
      VALUE: 'profiles-delete',
      TEXT: 'Delete profile',
    },
  },
};

export const permissionsArray = Object.values(Permissions).reduce(
  (acc, systemModuleObject) => acc.concat(Object.values(systemModuleObject)),
  []
);

if (
  Meteor.isDevelopment &&
  Meteor.settings.private &&
  Meteor.settings.private.REFRESH_PERMISSIONS
) {
  const currentRoles = Roles.getAllRoles().fetch();

  permissionsArray.forEach((permission) => {
    if (currentRoles.find((_role) => _role.id === permission.VALUE)) {
      Roles.createRole(permission.VALUE);
    }

    Meteor.roles.update(permission.VALUE, {
      $set: {
        publicName: permission.TEXT,
      },
    });
  });
}

export default Permissions;
