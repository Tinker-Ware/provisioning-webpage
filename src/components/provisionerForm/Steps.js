import { browserHistory } from "react-router";
import { fromJS } from "immutable";
import { Step, Stepper, StepButton } from "material-ui/Stepper";
import Addons from "./steps/Addons";
import ArrowForwardIcon from "material-ui/svg-icons/navigation/arrow-forward";
import ContentClear from "material-ui/svg-icons/content/clear";
import DataBases from "./steps/DataBases";
import FloatingActionButton from "material-ui/FloatingActionButton";
import Notification from "../Notification";
import ProjectName from "./steps/ProjectName";
import PropTypes from "prop-types";
import React from "react";
import Repositories from "./steps/Repositories";
import Stacks from "./steps/Stacks";
import SwipeableViews from "react-swipeable-views";

const style = {
  marginTop: ".5em",
  float: "right"
};

const Steps = ( {applicationAppState, environments, mysqlAppState, projectNameAppState, provisionerFormActions, rolesActions, setProjectName, userAppState, repositoryAppState, baseAppState, buildbotAppState, cloudProviderAppState, springAppState, mongodbAppState, nodejsAppState, sparkAppState, nginxAppState, yiiAppState, plainHtmlAppState} ) => {
  const handleChangeStep = (value) => {
    provisionerFormActions.setActiveStep(fromJS({
      active_step: value
    }));
  };
  const HandleGoToProjects = () => {
    browserHistory.push("/projects");
  };
  return (
    <div className="small-12 medium-12 large-12 large-centered columns">
      <FloatingActionButton
          mini
          onTouchTap={HandleGoToProjects}
          secondary
          style={style}
      >
        <ContentClear />
      </FloatingActionButton>
      <div className="container">
        <Stepper
            activeStep={applicationAppState.get("active_step")}
            connector={<ArrowForwardIcon />}
        >
          <Step>
            <StepButton onClick={() => handleChangeStep(0)}>
              {"Project Name"}
            </StepButton>
          </Step>
          <Step disabled={projectNameAppState.get("project_name")?false:true}>
            <StepButton onClick={() => handleChangeStep(1)}>
              {"Repository"}
            </StepButton>
          </Step>
          <Step disabled={projectNameAppState.get("project_name")?false:true}>
            <StepButton onClick={() => handleChangeStep(2)}>
              {"Frameworks"}
            </StepButton>
          </Step>
          <Step disabled={applicationAppState.get("stacks")?applicationAppState.get("stacks").size==0?true:false:true}>
            <StepButton onClick={() => handleChangeStep(3)}>
              {"DataBases"}
            </StepButton>
          </Step>
          <Step disabled={applicationAppState.get("stacks")?applicationAppState.get("stacks").size==0?true:false:true}>
            <StepButton onClick={() => handleChangeStep(4)}>
              {"Add-ons"}
            </StepButton>
          </Step>
        </Stepper>
        <SwipeableViews
            index={applicationAppState.get("active_step")}
        >
          <ProjectName
              projectNameAppState={projectNameAppState}
              setActiveStep={handleChangeStep}
              setProjectName={setProjectName}
          />
          <Repositories
              applicationAppState={applicationAppState}
              removeRepo={provisionerFormActions.removeRepo}
              repositories={applicationAppState.get("repositories")?applicationAppState.get("repositories"):fromJS([])}
              repositoriesOptions={applicationAppState.getIn(["steps","repositories"])}
              repositoryAppState={repositoryAppState}
              requestRepositoryAccess={provisionerFormActions.requestRepositoryAccess}
              requestUserRepositories={provisionerFormActions.requestUserRepositories}
              rolesActions={rolesActions}
              setActiveConfigurationStep={provisionerFormActions.setActiveConfigurationStep}
              setActiveStep={handleChangeStep}
              setRepo={provisionerFormActions.setRepo}
              setRepository={provisionerFormActions.setRepository}
              userAppState={userAppState}
          />
          <Stacks
              removeStack={provisionerFormActions.removeStack}
              rolesActions={rolesActions}
              setActiveStep={handleChangeStep}
              setStack={provisionerFormActions.setStack}
              stacks={applicationAppState.get("stacks")?applicationAppState.get("stacks"):fromJS([])}
              stacksOptions={applicationAppState.getIn(["steps","stacks"])}
          />
          <DataBases
              activeEnvironment={environments[applicationAppState.get("active_environment")].id}
              applicationAppState={applicationAppState}
              databases={applicationAppState.get("databases")?applicationAppState.get("databases"):fromJS([])}
              databasesOptions={applicationAppState.getIn(["steps","databases"])}
              environments={environments}
              mongodbAppState={mongodbAppState}
              mysqlAppState={mysqlAppState}
              removeDatabase={provisionerFormActions.removeDatabase}
              rolesActions={rolesActions}
              setActiveConfigurationStep={provisionerFormActions.setActiveConfigurationStep}
              setActiveEnvironment={provisionerFormActions.setActiveEnvironment}
              setActiveStep={handleChangeStep}
              setDatabase={provisionerFormActions.setDatabase}
          />
          <Addons
              addons={applicationAppState.get("addons")?applicationAppState.get("addons"):fromJS([])}
              addonsOptions={applicationAppState.getIn(["steps","addons"])}
              applicationAppState={applicationAppState}
              baseAppState={baseAppState}
              buildbotAppState={buildbotAppState}
              cloudProviderAppState={cloudProviderAppState}
              mongodbAppState={mongodbAppState}
              mysqlAppState={mysqlAppState}
              nginxAppState={nginxAppState}
              nodejsAppState={nodejsAppState}
              plainHtmlAppState={plainHtmlAppState}
              projectNameAppState={projectNameAppState}
              removeAddons={provisionerFormActions.removeAddons}
              repositoryAppState={repositoryAppState}
              requestPostUserProject={provisionerFormActions.requestPostUserProject}
              setActiveStep={handleChangeStep}
              setAddons={provisionerFormActions.setAddons}
              sparkAppState={sparkAppState}
              springAppState={springAppState}
              userAppState={userAppState}
              yiiAppState={yiiAppState}
          />
        </SwipeableViews>
      </div>
      {/* <Notification
          message={applicationAppState.get("notification")}
          setNotification={applicationActions.setNotification}
      /> */}
    </div>
  );
};

Steps.propTypes = {
  // applicationActions: PropTypes.object.isRequired,
  applicationAppState: PropTypes.object.isRequired,
  baseAppState: PropTypes.object.isRequired,
  buildbotAppState: PropTypes.object.isRequired,
  cloudProviderAppState: PropTypes.object.isRequired,
  environments: PropTypes.array.isRequired,
  mongodbAppState: PropTypes.object.isRequired,
  mysqlAppState: PropTypes.object.isRequired,
  nginxAppState: PropTypes.object.isRequired,
  nodejsAppState: PropTypes.object.isRequired,
  plainHtmlAppState: PropTypes.object.isRequired,
  projectNameAppState: PropTypes.object.isRequired,
  provisionerFormActions: PropTypes.object.isRequired,
  repositoryAppState: PropTypes.object.isRequired,
  rolesActions: PropTypes.object.isRequired,
  setProjectName: PropTypes.func.isRequired,
  sparkAppState: PropTypes.object.isRequired,
  springAppState: PropTypes.object.isRequired,
  userAppState: PropTypes.object.isRequired,
  yiiAppState: PropTypes.object.isRequired
};

export default Steps;
