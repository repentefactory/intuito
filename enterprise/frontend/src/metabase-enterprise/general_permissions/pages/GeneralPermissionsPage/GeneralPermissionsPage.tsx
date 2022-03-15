import _ from "underscore";
import { EditorEmptyStateContainer } from "metabase/admin/permissions/components/PermissionsEditor/PermissionsEditorContent.styled";
import { PermissionsEditor } from "metabase/admin/permissions/components/PermissionsEditor";
import EmptyState from "metabase/components/EmptyState";
import Groups from "metabase/entities/groups";
import React from "react";
import { GeneralPermissionsPageContainer } from "./GeneralPermissionsPage.styled";
import { connect } from "react-redux";

const mapDispatchToProps = {
  initialize: initializeInstancePermissions,
  savePermissions: saveInstancePermissions,
};

const mapStateToProps = (state: Store, props) => {
  return {
    permissionEditor: getCollectionsPermissionEditor(state, props),
    isDirty: getIsDirty(state, props),
  };
};

const GeneralPermissionsPage = ({ permissionEditor, isDirty }) => {
  return (
    <GeneralPermissionsPageContainer>
      {permissionEditor && (
        <PermissionsEditor
          {...permissionEditor}
          onChange={handlePermissionChange}
        />
      )}
    </GeneralPermissionsPageContainer>
  );
};

export default _.compose(
  Groups.loadList(),
  connect(mapStateToProps, mapDispatchToProps),
)(GeneralPermissionsPage);
