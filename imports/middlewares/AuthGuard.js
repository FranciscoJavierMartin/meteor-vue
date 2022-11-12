export function checkPermission(methodArgs, methodOptions) {
  const idUser = this.userId;
  const permissions = methodOptions.permissions;
  let hasPermission = false;

  if (!idUser) {
    const profileName = Meteor.user().profile.profile;
    hasPermission = Roles.userIsInRole(idUser, permissions, profileName);
  }

  if (!hasPermission) {
    throw new Meteor.Error(
      '403',
      'Denied access',
      'You are not allowed to perform this action'
    );
  }

  return methodArgs;
}
