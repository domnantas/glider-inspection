// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'
import InspectionsLayout from 'src/layouts/InspectionsLayout'
import InspectionStepsLayout from 'src/layouts/InspectionStepsLayout'
import GliderTypesLayout from 'src/layouts/GliderTypesLayout'
import GlidersLayout from 'src/layouts/GlidersLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={InspectionsLayout}>
        <Route path="/inspections/new" page={InspectionNewInspectionPage} name="newInspection" />
        <Route path="/inspections/{id:Int}/edit" page={InspectionEditInspectionPage} name="editInspection" />
        <Route path="/inspections/{id:Int}" page={InspectionInspectionPage} name="inspection" />
        <Route path="/inspections" page={InspectionInspectionsPage} name="inspections" />
      </Set>
      <Set wrap={InspectionStepsLayout}>
        <Route path="/inspection-steps/new" page={InspectionStepNewInspectionStepPage} name="newInspectionStep" />
        <Route path="/inspection-steps/{id:Int}/edit" page={InspectionStepEditInspectionStepPage} name="editInspectionStep" />
        <Route path="/inspection-steps/{id:Int}" page={InspectionStepInspectionStepPage} name="inspectionStep" />
        <Route path="/inspection-steps" page={InspectionStepInspectionStepsPage} name="inspectionSteps" />
      </Set>
      <Set wrap={GliderTypesLayout}>
        <Route path="/glider-types/new" page={GliderTypeNewGliderTypePage} name="newGliderType" />
        <Route path="/glider-types/{id:Int}/edit" page={GliderTypeEditGliderTypePage} name="editGliderType" />
        <Route path="/glider-types/{id:Int}" page={GliderTypeGliderTypePage} name="gliderType" />
        <Route path="/glider-types" page={GliderTypeGliderTypesPage} name="gliderTypes" />
      </Set>
      <Set wrap={GlidersLayout}>
        <Route path="/gliders/new" page={GliderNewGliderPage} name="newGlider" />
        <Route path="/gliders/{id:Int}/edit" page={GliderEditGliderPage} name="editGlider" />
        <Route path="/gliders/{id:Int}" page={GliderGliderPage} name="glider" />
        <Route path="/gliders" page={GliderGlidersPage} name="gliders" />
      </Set>
      <Route path="/inspection" page={InspectionPage} name="inspection" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
