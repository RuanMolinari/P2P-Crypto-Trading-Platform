use anchor_lang::prelude::*;

declare_id!("Ficticio1111111111111111111111111111111111111");

#[program]
pub mod p2p {
    use super::*;

    pub fn initialize(_ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
