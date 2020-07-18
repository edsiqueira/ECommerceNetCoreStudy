using Microsoft.EntityFrameworkCore.Migrations;

namespace Repository.Migrations
{
    public partial class PaymentTypeLoad : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "PaymentType",
                columns: new[] { "ID", "Descricao", "Name" },
                values: new object[] { 1, "Generate a payment slip", "Payment slip" });

            migrationBuilder.InsertData(
                table: "PaymentType",
                columns: new[] { "ID", "Descricao", "Name" },
                values: new object[] { 2, "Make your payment with Credit card", "Credit card" });

            migrationBuilder.InsertData(
                table: "PaymentType",
                columns: new[] { "ID", "Descricao", "Name" },
                values: new object[] { 3, "Realize deposit to payment", "Deposit" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "PaymentType",
                keyColumn: "ID",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "PaymentType",
                keyColumn: "ID",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "PaymentType",
                keyColumn: "ID",
                keyValue: 3);
        }
    }
}
