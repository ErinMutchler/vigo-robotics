<template>
  <div class="container">
    <div class="card">
      <pre>
      def turn_on_motor(motor: str, direction: str, power: int):
        """
        Turn the given motor on moving the given direction at the given power
        :param str motor: motor to turn on ('LEFT' or 'RIGHT')
        :param str direction: direction for the motor to turn ('FORWARD' or 'BACKWARD')
        :param int power: motor power from 0% to 100%
        """

      def turn_off_motor(motor: str):
        """
        Turn the given motor off
        :param str motor: motor to turn off ('LEFT' or 'RIGHT')
        :return: true if successful else false
        :rtype: bool
        """

      def drive(direction: str, power: int):
        """
        Move the robot in the given direction at the given power
        :param str direction: direction for the robot to drive ('FORWARD' or 'BACKWARD')
        :param int power: motor power from 0% to 100%
        """

      def drive_distance(direction: str, power: int, distance: int):
        """
        Move the robot in the given direction at the given power for the given distance
        :param str direction: direction for the robot to drive ('FORWARD' or 'BACKWARD')
        :param int power: motor power from 0% to 100%
        :param int distance: distance to drive in centimeters
        """

      def spin(direction: str, power: int):
        """
        Spin the robot in the given direction at the given power
        :param str direction: direction for the robot to spin ('LEFT' or 'RIGHT')
        :param int power: motor power from 0% to 100%
        """

      def spin_degrees(direction: str, power: int, degrees: int):
        """
        Spin the robot in the given direction at the given power for the given degrees
        :param str direction: direction for the robot to drive ('LEFT' or 'RIGHT')
        :param int power: motor power from 0% to 100%
        :param int degrees: degrees to spin
        """

      def stop():
        """
        Turn both motors off
        """

      def get_ultrasonic_value():
        """
        Get the value of the ultrasonic sensor
        :return: value of ultrasonic sensor in centimeters
        :rtype: int
        """

      def get_line_tracking_value(sensor: str):
        """
        Get the value of the given line tracking sensor from 0 to 65536
        :param str sensor: sensor to read value from ('LEFT' or 'RIGHT')
        :return: value of the given line tracking sensor from 0 to 65536
        :rtype: int
        """

      def get_bumper_value(bumper: str):
        """
        Get the value of the given bumper
        :param str bumper: bumper to read value from ('LEFT' or 'RIGHT')
        :return: value of the given bumper
        :rtype: bool
        """

      def get_button_value(button: str):
        """
        Get the value of the given button
        :param str button: button to read value from ('A' or 'B')
        :return: value of the given button
        :rtype: bool
        """

      def reset_distance_counter(motor: str):
        """
        Set the distance counter for the given motor to 0
        :param str motor: motor to reset distance counter ('LEFT' or 'RIGHT')
        """

      def get_distance_counter(motor: str):
        """
        Get the current distance traveled by the given motor in centimeters
        :param str motor: motor to get current distance from ('LEFT' or 'RIGHT')
        :return: current distance traveled by the given motor in centimeters
        :rtype: int
        """

      def set_servo(servo: int, position: int):
        """
        Set the given servo to the given position
        :param int servo: servo to move to the given position (1, 2, 3, or 4)
        :param int position: position to set the given servo to from 0 to 180
        """

      def print(text):
        """
        Prints the given text on the screen
        :param text: text to print
        """
        </pre>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 800px;
  margin: auto;
}
</style>