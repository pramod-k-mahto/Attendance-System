import { Routes, Route } from "react-router-dom";

// Teacher Dashboard Components
import TeacherDashboard from "./Dashboard/TeacherDashboard/Dashboard/TeacherDashboard";
import TeacherAttendance from "./Dashboard/TeacherDashboard/Attendance/TeacherAttendance";
import TeacherBatch from "./Dashboard/TeacherDashboard/Batch/TeacherBatch";
import TeacherNotification from "./Dashboard/TeacherDashboard/Notification/TeacherNotification";
import TeacherSetting from "./Dashboard/TeacherDashboard/Setting/TeacherSetting";
import TeacherReports from "./Dashboard/TeacherDashboard/Reports/TeacherReports";
import TeacherLogout from "./Dashboard/TeacherDashboard/Logout/TeacherLogout";

// Admin Dashboard Components
import AdminDashboard from "./Dashboard/AdminDashboard/Dashboard/AdminDashboard";
import AdminAttendance from "./Dashboard/AdminDashboard/Attendance/AdminAttendance";
import AdminBatch from "./Dashboard/AdminDashboard/Batch/AdminBatch";
import AdminNotification from "./Dashboard/AdminDashboard/Notification/AdminNotification";
import AdminSetting from "./Dashboard/AdminDashboard/Setting/AdminSetting";
import AdminReports from "./Dashboard/AdminDashboard/Reports/AdminReports";
import AdminLogout from "./Dashboard/AdminDashboard/Logout/AdminLogout";

// Student Dashboard Components
import StudentDashboard from "./Dashboard/StudentDashboard/Dashboard/StudentDashboard";
import StudentBatch from "./Dashboard/StudentDashboard/Batch/StudentBatch";
import StudentNotification from "./Dashboard/StudentDashboard/Notification/StudentNotification";
import StudentSetting from "./Dashboard/StudentDashboard/Setting/StudentSetting";
import StudentReports from "./Dashboard/StudentDashboard/Reports/StudentReports";
import StudentLogout from "./Dashboard/StudentDashboard/Logout/StudentLogout";
import StudentAttendance from "./Dashboard/StudentDashboard/Attendance/StudentAttendance";
import TeacherIndex from "./Dashboard/TeacherDashboard/TeacherIndex/TeacherIndex";

function App() {
  return (
    <div>
      <Routes>
        {/* Admin Dashboard Routes */}
        <Route path="/" element={<AdminDashboard />}>
          <Route index element={<AdminBatch />} />
          <Route path="attendance" element={<AdminAttendance />} />
          <Route path="notification" element={<AdminNotification />} />
          <Route path="reports" element={<AdminReports />} />
          <Route path="batch" element={<AdminBatch />} />
          <Route path="setting" element={<AdminSetting />} />
          <Route path="logout" element={<AdminLogout />} />
        </Route>

        {/* Teacher Dashboard Routes */}
        <Route path="/teacher" element={<TeacherDashboard />}>
          <Route path="attendance" element={<TeacherAttendance />} />
          <Route path="notification" element={<TeacherNotification />} />
          <Route path="reports" element={<TeacherReports />} />
          <Route path="batch" element={<TeacherBatch />} />
          <Route path="setting" element={<TeacherSetting />} />
          <Route path="logout" element={<TeacherLogout />} />
          <Route path="teacherIndex" element={<TeacherIndex />} />
          <Route index element={<TeacherIndex />} />

        </Route>

        {/* Student Dashboard Routes */}
        <Route path="/student" element={<StudentDashboard />}>
          <Route index element={<StudentBatch />} />
          <Route path="attendance" element={<StudentAttendance />} />
          <Route path="notification" element={<StudentNotification />} />
          <Route path="reports" element={<StudentReports />} />
          <Route path="batch" element={<StudentBatch />} />
          <Route path="setting" element={<StudentSetting />} />
          <Route path="logout" element={<StudentLogout />} />
        </Route>

        <Route   path="*"  element={<h1>Page not Found </h1>} />
      </Routes>
    </div>
  );
}

export default App;