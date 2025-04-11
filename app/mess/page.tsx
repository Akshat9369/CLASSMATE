import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Calendar, Coffee, UtensilsCrossed } from "lucide-react"
import MainLayout from "@/components/main-layout"

export default function MessPage() {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

  const messMenu = {
    Monday: {
      breakfast: ["Bread", "Butter", "Jam", "Eggs", "Cereal", "Milk", "Tea", "Coffee"],
      lunch: ["Rice", "Dal", "Paneer Curry", "Roti", "Salad", "Yogurt"],
      snacks: ["Samosa", "Tea", "Coffee"],
      dinner: ["Rice", "Dal", "Mixed Vegetable", "Chicken Curry", "Roti", "Ice Cream"],
    },
    Tuesday: {
      breakfast: ["Idli", "Sambar", "Coconut Chutney", "Fruit Salad", "Tea", "Coffee"],
      lunch: ["Rice", "Rajma", "Aloo Gobi", "Roti", "Salad", "Buttermilk"],
      snacks: ["Bread Pakora", "Tea", "Coffee"],
      dinner: ["Rice", "Dal", "Egg Curry", "Roti", "Salad", "Fruit Custard"],
    },
    Wednesday: {
      breakfast: ["Poha", "Upma", "Boiled Eggs", "Bread", "Butter", "Tea", "Coffee"],
      lunch: ["Rice", "Dal", "Chana Masala", "Roti", "Salad", "Yogurt"],
      snacks: ["Vada", "Tea", "Coffee"],
      dinner: ["Rice", "Dal", "Bhindi Masala", "Fish Curry", "Roti", "Kheer"],
    },
    Thursday: {
      breakfast: ["Paratha", "Curd", "Pickle", "Fruit Salad", "Tea", "Coffee"],
      lunch: ["Rice", "Dal", "Aloo Matar", "Roti", "Salad", "Buttermilk"],
      snacks: ["Biscuits", "Cake", "Tea", "Coffee"],
      dinner: ["Rice", "Dal", "Paneer Butter Masala", "Roti", "Salad", "Gulab Jamun"],
    },
    Friday: {
      breakfast: ["Dosa", "Sambar", "Coconut Chutney", "Boiled Eggs", "Tea", "Coffee"],
      lunch: ["Rice", "Dal", "Mixed Vegetable", "Roti", "Salad", "Yogurt"],
      snacks: ["Pakora", "Tea", "Coffee"],
      dinner: ["Rice", "Dal", "Chicken Biryani", "Raita", "Salad", "Ice Cream"],
    },
    Saturday: {
      breakfast: ["Bread", "Omelette", "Jam", "Butter", "Cereal", "Milk", "Tea", "Coffee"],
      lunch: ["Rice", "Dal", "Kadai Paneer", "Roti", "Salad", "Buttermilk"],
      snacks: ["Pav Bhaji", "Tea", "Coffee"],
      dinner: ["Rice", "Dal", "Malai Kofta", "Roti", "Salad", "Rasmalai"],
    },
    Sunday: {
      breakfast: ["Chole Bhature", "Fruit Salad", "Tea", "Coffee"],
      lunch: ["Veg Pulao", "Dal Makhani", "Paneer Tikka", "Roti", "Salad", "Raita"],
      snacks: ["Pastry", "Tea", "Coffee"],
      dinner: ["Rice", "Dal", "Mutton Curry", "Roti", "Salad", "Pastry"],
    },
  }

  return (
    <MainLayout>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Mess Information</CardTitle>
            <CardDescription>Timings and Balance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="font-medium">Mess Timings</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Coffee className="h-4 w-4" />
                    <span>Breakfast</span>
                  </div>
                  <span>7:00 AM - 9:30 AM</span>

                  <div className="flex items-center gap-2">
                    <UtensilsCrossed className="h-4 w-4" />
                    <span>Lunch</span>
                  </div>
                  <span>12:00 PM - 2:30 PM</span>

                  <div className="flex items-center gap-2">
                    <Coffee className="h-4 w-4" />
                    <span>Snacks</span>
                  </div>
                  <span>4:30 PM - 5:30 PM</span>

                  <div className="flex items-center gap-2">
                    <UtensilsCrossed className="h-4 w-4" />
                    <span>Dinner</span>
                  </div>
                  <span>7:00 PM - 9:30 PM</span>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Mess Balance</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span>Current Balance</span>
                  <span className="font-medium">₹2,450</span>

                  <span>Monthly Charge</span>
                  <span>₹3,500</span>

                  <span>Valid Till</span>
                  <span>April 30, 2025</span>

                  <span>Mess Type</span>
                  <span>A (Non-Vegetarian)</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="Monday" className="space-y-4">
          <TabsList className="grid grid-cols-7">
            {days.map((day) => (
              <TabsTrigger key={day} value={day}>
                {day.substring(0, 3)}
              </TabsTrigger>
            ))}
          </TabsList>

          {days.map((day) => (
            <TabsContent key={day} value={day} className="space-y-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <div>
                    <CardTitle>{day}</CardTitle>
                    <CardDescription className="flex items-center mt-1">
                      <Calendar className="mr-1 h-4 w-4" />
                      Weekly Menu
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-orange-500">Breakfast</Badge>
                        <span className="text-xs text-muted-foreground">7:00 AM - 9:30 AM</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {messMenu[day].breakfast.map((item, index) => (
                          <Badge key={index} variant="outline">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-green-500">Lunch</Badge>
                        <span className="text-xs text-muted-foreground">12:00 PM - 2:30 PM</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {messMenu[day].lunch.map((item, index) => (
                          <Badge key={index} variant="outline">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-yellow-500">Snacks</Badge>
                        <span className="text-xs text-muted-foreground">4:30 PM - 5:30 PM</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {messMenu[day].snacks.map((item, index) => (
                          <Badge key={index} variant="outline">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-blue-500">Dinner</Badge>
                        <span className="text-xs text-muted-foreground">7:00 PM - 9:30 PM</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {messMenu[day].dinner.map((item, index) => (
                          <Badge key={index} variant="outline">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </MainLayout>
  )
}

