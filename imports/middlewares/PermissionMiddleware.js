export default class PermissionMiddleware extends PublishMiddleware {
  constructor(permissions) {
    super();
    this._permissions = permissions;
  }

  added(publish, collection, id, fields) {
    return publish.userId ? super.added(...arguments) : publish.ready();
  }

  changed(publish, collection, id, fields) {
    return publish.userId ? super.changed(...arguments) : publish.ready();
  }

  removed(publish, collection, id) {
    return publish.userId ? super.removed(...arguments) : publish.ready();
  }

  onReady(publish) {
    return publish.userId ? super.onReady(...arguments) : publish.ready();
  }

  onError(publish) {
    return publish.userId ? super.onError(...arguments) : publish.ready();
  }

  checkPermission(idUser) {
    const profileName = Roles.getScopesForuser(idUser)[0];
    return Roles.userIsInRole(idUser, this._permissions, profileName);
  }
}
