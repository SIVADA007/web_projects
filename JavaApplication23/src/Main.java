
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter size: ");
        int n = input.nextInt();
        input.nextLine(); // Consume the newline character

        System.out.print("Enter name: ");
        String name = input.nextLine();

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (i == j || i + j == n - 1) {
                    System.out.print(name.charAt(j) + "\t");      //slash t will allow us to leave a tab sized space
                } else {
                    System.out.print("\t");
                }
            }
            System.out.println();
        }
    }
}
