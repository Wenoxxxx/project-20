exports.getDashboardStats = (req, res) => {
  res.json({
    totalCollected: 125450,
    activeCases: 42,
    totalTeachers: 156,
    recentActivity: [
      { id: 1, type: 'case', message: 'New case created: #C-1234', time: '2 hours ago' },
      { id: 2, type: 'payment', message: 'Payment received: $500', time: '4 hours ago' },
    ]
  });
};

exports.getTeachersList = (req, res) => {
  // Mock data
  res.json([
    { id: 1, name: "Dr. Elizabeth Tan", email: "e.tan@school.edu", phone: "+63 912 345 6789", status: "Active" },
    { id: 2, name: "Prof. Ricardo Reyes", email: "r.reyes@school.edu", phone: "+63 912 345 6788", status: "Active" },
  ]);
};

exports.getCasesList = (req, res) => {
  // Mock data
  res.json([
    { id: 1, caseNumber: "C-2024-001", deceasedName: "Juan Dela Cruz", dateRegistered: "2024-05-10", status: "Active" },
    { id: 2, caseNumber: "C-2024-002", deceasedName: "Maria Clara", dateRegistered: "2024-05-08", status: "Active" },
    { id: 3, caseNumber: "C-2023-085", deceasedName: "Pedro Penduko", dateRegistered: "2023-12-15", status: "Archived" },
  ]);
};
