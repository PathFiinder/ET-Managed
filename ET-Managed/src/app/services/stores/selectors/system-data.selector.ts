import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as models from '../types/systemData.model';
import {ExpenseIncomeCategory, MoneyDestination, PaymentMethod} from '../types/systemData.model';
import {ApexDataChartModel} from '../../../components/models/apex-data-chart.model';
import {getCircularGaugeDataFromSelector, getRadarChatDataFromSelector} from '../utils';


const selectSystemDataState = createFeatureSelector<any, models.SystemData>('system-data');

export const selectCurrentUser = createSelector<any, models.SystemData, models.LoggedUser> (
    selectSystemDataState,
    (state: models.SystemData) => state.loggedUser
);

export const selectApplicationData = createSelector<any, models.SystemData, models.ApplicationData> (
    selectSystemDataState,
    (state: models.SystemData) => state.applicationData
);

export const selectNavigationList = createSelector<any, models.ApplicationData, models.NavigationItem[]> (
    selectApplicationData,
    (applicationData: models.ApplicationData) => applicationData.navigationList
);

export const selectNavigationItemById = createSelector<any, number, models.NavigationItem[], models.NavigationItem> (
    selectNavigationList,
    (navigationItems: models.NavigationItem[], index: number) => navigationItems[index]
);

export const selectSystemInfo = createSelector<any, models.ApplicationData, models.SystemInfo>(
    selectApplicationData,
    (applicationData: models.ApplicationData) => applicationData.systemInfo
);

export const selectIsMenuExpanded = createSelector<any, models.ApplicationData, boolean>(
    selectApplicationData,
    (applicationData: models.ApplicationData) => applicationData.menuExpanded
);

export const selectAvatarList = createSelector<any, models.ApplicationData, models.AvatarItem[]>(
    selectApplicationData,
    (applicationData: models.ApplicationData) => applicationData.avatarList
);

export const selectNavigationItemByName = createSelector<any, string, models.NavigationItem[], models.NavigationItem> (
    selectNavigationList,
    (navigationItems: models.NavigationItem[], itemName: string) =>  navigationItems.find(item => item.name === itemName)
);

export const selectUserData = createSelector<any, models.SystemData, models.UserData>(
    selectSystemDataState,
    (state: models.SystemData) => state.userData
);

export const selectNotificationData = createSelector<any, models.UserData, models.NotificationData>(
    selectUserData,
    (userData: models.UserData) => userData.notificationData
);

export const selectNotificationList = createSelector<any, models.NotificationData, models.NotificationItem[]>(
    selectNotificationData,
    (notificationData: models.NotificationData) => notificationData.notificationList
);

export const selectNotificationItemById = createSelector<any, number, models.NotificationItem[], models.NotificationItem>(
    selectNotificationList,
    (notificationList: models.NotificationItem[], index: number) => notificationList[index]
);

export const selectAllNotificationItemsByCategory = createSelector<any, models.CategoryAndPriority, models.NotificationItem[], models.NotificationItem | models.NotificationItem[]>(
    selectNotificationList,
    (notificationList: models.NotificationItem[], category: models.CategoryAndPriority) => notificationList.filter(item => item.category === category)
);

export const selectAllExpandedNotificationItems = createSelector<any, models.NotificationItem[], models.NotificationItem | models.NotificationItem[]> (
    selectNotificationList,
    (notificationList: models.NotificationItem[]) => notificationList.filter(item => item.isExpanded == true)
);

export const selectActiveNotificationItem = createSelector<any, models.NotificationItem[], models.NotificationItem | models.NotificationItem[]> (
    selectNotificationList,
    (notificationList: models.NotificationItem[]) => notificationList.filter(item => item.isActive == true)
);

export const selectIsNewNotification = createSelector<any, models.NotificationData, boolean> (
    selectNotificationData,
    (notificationData: models.NotificationData) => notificationData.isNewNotification
);

export const selectTasksData = createSelector<any, models.UserData, models.TaskData>(
    selectUserData,
    (userData: models.UserData) => userData.tasksData
);

export const selectTasksList = createSelector<any, models.TaskData, models.TasksItem[]>(
    selectTasksData,
    (tasksData: models.TaskData) => tasksData.tasksList
);

export const selectActiveTasks = createSelector<any, models.TasksItem[], models.TasksItem[] | models.TasksItem>(
    selectTasksList,
    (taskList: models.TasksItem[]) => taskList.filter(task => task.isActive)
);

export const selectDoneTasks = createSelector<any, models.TasksItem[], models.TasksItem[] | models.TasksItem>(
    selectTasksList,
    (taskList: models.TasksItem[]) => taskList.filter(task => task.isDone)
);

export const selectTasksByPriority = createSelector<any, models.CategoryAndPriority, models.TasksItem[], models.TasksItem[]>(
    selectTasksList,
    (taskList: models.TasksItem[], categoryPriority: models.CategoryAndPriority) => taskList.filter(task => task.priority === categoryPriority)
);

export const selectBudgetData = createSelector<any, models.UserData, models.BudgetData>(
    selectUserData,
    (userData: models.UserData) => userData.budgetData
);

export const selectBudgetList = createSelector<any, models.BudgetData, models.BudgetItem[]>(
    selectBudgetData,
    (budgetData: models.BudgetData) => budgetData?.budgetList
);

export const selectBudgetItemByRange = createSelector<any, any, models.BudgetItem[], models.BudgetItem>(
    selectBudgetList,
    (budgetItems: models.BudgetItem[], props: any) => budgetItems?.find(item => item.range === props.rangeToSelect)
);

export const selectBudgetItemsTotalIncomeByRange = createSelector<any, any, models.BudgetItem[], number>(
    selectBudgetList,
    (budgetItems: models.BudgetItem[], props: any) =>
        selectBudgetItemByRange.projector(budgetItems, { rangeToSelect: props.rangeToSelect})?.totalBudget
);

export const selectBudgetItemsTotalExpensesByRange = createSelector<any, any, models.BudgetItem[], number>(
  selectBudgetList,
  (budgetItems: models.BudgetItem[], props: any) => {
    const monthBudgetItems = selectBudgetItemByRange.projector(budgetItems, {rangeToSelect: props.rangeToSelect})?.
    monthBudgetItems.filter(item => item.type === MoneyDestination.EXPENSE);
    return monthBudgetItems?.reduce(
      (prev, current) =>
        prev + current.price || 0,
      0
    );
  }
);


export const selectBudgetItemMaxExpensesByRange  = createSelector<any, any, models.BudgetItem[], number>(
    selectBudgetList,
    (budgetItems: models.BudgetItem[], props: any) =>
        selectBudgetItemByRange.projector(budgetItems, { rangeToSelect: props.rangeToSelect})?.
        monthBudgetItems.reduce(function(prev, current) {
            return (prev.price > current.price) ? prev : current;
        }).price
);

export const selectTotalSavingFromMonthByRange = createSelector<any, any, models.BudgetItem[], number>(
    selectBudgetList,
    (budgetItems: models.BudgetItem[], props: any) => {
        const totalBudget = selectBudgetItemByRange.projector(budgetItems, { rangeToSelect: props.rangeToSelect})?.totalBudget;
        const totalExpenses = selectBudgetItemTotalExpensesByRange.projector(budgetItems, { rangeToSelect: props.rangeToSelect});
        return totalBudget - totalExpenses;
    }
);

export const selectBudgetItemsTotalExpenseWithSelectedMethodByRange = createSelector<any, any, models.BudgetItem[], number>(
    selectBudgetList,
    (budgetItems: models.BudgetItem[], props: any) =>
      selectBudgetItemByRange.projector(budgetItems, {rangeToSelect: props.rangeToSelect})?.monthBudgetItems.reduce((sum, {
        price,
        paymentMethod,
        type
      }) => paymentMethod === props.paymentMethod && type === models.MoneyDestination.EXPENSE ? sum + price : sum, 0)
    );

export const selectBudgetItemTotalExpensesByRange = createSelector<any, any, models.BudgetItem[], number>(
    selectBudgetList,
    (budgetItems: models.BudgetItem[], props: any) =>
        selectBudgetItemByRange.projector(budgetItems, { rangeToSelect: props.rangeToSelect})?.monthBudgetItems.
        reduce((sum, { price, type }) => type === models.MoneyDestination.EXPENSE ? sum + price : sum, 0)
);


export const selectBudgetItemsMonthItemsExpensesByRange = createSelector<any, any, models.BudgetItem[], models.MonthBudgetItem[]>(
    selectBudgetList,
    (budgetItems: models.BudgetItem[], props: any) =>
     selectBudgetItemByRange.projector(budgetItems, { rangeToSelect: props.rangeToSelect})?.monthBudgetItems.
      filter(item => item.type === models.MoneyDestination.EXPENSE)
);

export const selectBudgetItemsMonthItemsTotalNumber = createSelector<any, any, models.BudgetItem[], number>(
  selectBudgetList,
  (budgetItems: models.BudgetItem[], props: any) => {
    const c = selectBudgetItemByRange.projector(budgetItems, { rangeToSelect: props.rangeToSelect})?.monthBudgetItems.length;
    return c;
  }
);


export const selectBudgetItemAllPlanningItemsByRange = createSelector<any, any, models.BudgetItem[], models.MonthBudgetItem[]>(
    selectBudgetList,
    (budgetItems: models.BudgetItem[], props: any) =>
        selectBudgetItemByRange.projector(budgetItems, { rangeToSelect: props.rangeToSelect})?.monthBudgetItems.
        filter(item => item.category === models.ExpenseIncomeCategory.PLANNING)
);

export const selectChartsData = createSelector<any, models.UserData, models.ChartsData>(
    selectUserData,
    (userData: models.UserData) => userData.chartsData
);

export const selectChartsList = createSelector<any, models.ChartsData, models.ChartItem[]>(
    selectChartsData,
    (chartsData: models.ChartsData) => chartsData.chartsList
);

export const selectCalendarData = createSelector<any, models.UserData, models.CalendarData>(
    selectUserData,
    (userData: models.UserData) => userData.calendarData
);

export const selectCalendarList = createSelector<any, models.CalendarData, models.CalendarItem[]>(
    selectCalendarData,
    (calendarData: models.CalendarData) => calendarData.calendarList
);


export const selectMethodsPaymentDataForCircularGaugeChartByRange = createSelector<any, any, models.BudgetItem[], ApexDataChartModel>(
  selectBudgetList,
  (budgetItems: models.BudgetItem[], props: any) => {

    const paypalExpenses = selectBudgetItemsTotalExpenseWithSelectedMethodByRange.projector(budgetItems, {
      rangeToSelect: props.rangeToSelect,
      paymentMethod: PaymentMethod.PAYPAL
    });
    const creditCardExpenses = selectBudgetItemsTotalExpenseWithSelectedMethodByRange.projector(budgetItems, {
      rangeToSelect: props.rangeToSelect,
      paymentMethod: PaymentMethod.CREDIT_CARD
    });
    const cashExpenses = selectBudgetItemsTotalExpenseWithSelectedMethodByRange.projector(budgetItems, {
      rangeToSelect: props.rangeToSelect,
      paymentMethod: PaymentMethod.CASH
    });

    const circularGaugeChartData = getCircularGaugeDataFromSelector([paypalExpenses, creditCardExpenses, cashExpenses],
      [PaymentMethod.PAYPAL, PaymentMethod.CREDIT_CARD, PaymentMethod.CASH]);

    return circularGaugeChartData.series.length === 0 ? null : circularGaugeChartData;
  }
  );

export const selectExpensesCategoriesDataForRadarChartByRange = createSelector<any, any, models.BudgetItem[], number[]>(
  selectBudgetList,
  (budgetItem: models.BudgetItem[], props: any) => {
    const expensesItems = selectBudgetItemsMonthItemsExpensesByRange.projector(budgetItem, {
      rangeToSelect: props.rangeToSelect,
    });

    return getRadarChatDataFromSelector(expensesItems);
  }
  );


