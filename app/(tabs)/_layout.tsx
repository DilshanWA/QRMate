import { Tabs } from "expo-router";
import { History, ScanLine, QrCode, Settings } from "lucide-react-native";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ 
      headerShown: false, 
      tabBarPosition: "top", 
      tabBarActiveTintColor: "#ffc401", 
      tabBarInactiveTintColor: "#ffffff", 

      tabBarLabelStyle: { 
        fontSize: 14, 
        fontWeight: "600", 
      }, 
      tabBarStyle: { 
        height: 120, 
        backgroundColor: "#00777B", 
        paddingTop: 50, 
        paddingHorizontal:5, 
        elevation: 0, 
        shadowOpacity: 0, 
        borderBottomWidth: 0, 
      }, 
      }} 
    >
      <Tabs.Screen
        name="scan"
        options={{
          title: "Scan",
          tabBarIcon: ({ size, color }) => (
            <ScanLine size={size} color={color} />
          ),
         }}
      />

      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          tabBarIcon: ({ size, color }) => (
            <QrCode size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarIcon: ({ size, color}) =>(
            <History size={size} color={color} />
          ) 
        }}
      />

      <Tabs.Screen
        name="setting"
        options={{
            title: "Settings",
            tabBarIcon: ({ size, color }) => (
                <Settings size={size} color={color} />
            )
        }}
      />

    </Tabs>
    
  );
}