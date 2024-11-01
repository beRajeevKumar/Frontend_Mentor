document.getElementById('toggleSwitch').addEventListener('change', function() {
    const isYearly = this.checked;
    const pricingPlans = document.querySelectorAll('.pricing-plan');

    pricingPlans.forEach(plan => {
        const priceElement = plan.querySelector('.price');
        const monthlyPrice = priceElement.getAttribute('data-monthly');
        const yearlyPrice = priceElement.getAttribute('data-yearly');

        if (isYearly) {
            priceElement.textContent = `Rs${yearlyPrice}/year`;
        } else {
            priceElement.textContent = `Rs${monthlyPrice}/month`;
        }
    });
});
